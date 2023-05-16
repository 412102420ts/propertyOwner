package com.example.webSocket;

import com.alibaba.fastjson.JSON;
import com.example.domain.Message;
import com.example.service.MessageService;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author zfChen
 * @create 2022/11/14 15:11
 */
@ServerEndpoint("/websocket/{userId}")
@Component
@Slf4j
public class WebSocketServer {
    /**静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。*/
    private static int onlineCount = 0;
    /**concurrent包的线程安全集合，也可以map改成set，用来存放每个客户端对应的MyWebSocket对象。*/
    private static ConcurrentHashMap<String,WebSocketServer> webSocketMap = new ConcurrentHashMap<>();
    /**与某个客户端的连接会话，需要通过它来给客户端发送数据*/
    private Session session;
    /**接收userId*/
    private String userId="";
//    @Autowired
    private static MessageService messageService;
    @Autowired
    public void setMessageService(MessageService messageService) {
        WebSocketServer.messageService = messageService;
    }


        /**
         * 连接建立成功调用的方法*/
    @OnOpen
    public void onOpen(Session session,@PathParam("userId") String userId) {
        this.session = session;
        this.userId=userId;

        if(!webSocketMap.containsKey(userId)){
            //加入集合中
            webSocketMap.put(userId,this);
            //在线数加1
            addOnlineCount();
        }

        log.info("用户连接:"+userId+",当前在线人数为:" + getOnlineCount());

//        try {
//            sendMessage("连接成功");
//        } catch (IOException e) {
//            log.error("用户:"+userId+",网络异常!!!!!!");
//        }
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose() {
        if(webSocketMap.containsKey(userId)){
            webSocketMap.remove(userId);
            //从集合中删除
            subOnlineCount();
        }
        log.info("用户退出:"+userId+",当前在线人数为:" + getOnlineCount());
    }

    /**
     * 收到客户端消息后调用的方法
     *
     * @param message 客户端发送过来的消息*/
    @OnMessage
    public void onMessage(String message, Session session) {
        JSONObject jo = JSONObject.fromObject(message);
        if(jo.get("type") == null) {
            Message messageC = new Message(Integer.parseInt(jo.get("fromId").toString()), Integer.parseInt(jo.get("toId").toString()), jo.get("context").toString(), new Date().getTime());
            messageService.newMessage(messageC);
            try {
                sendInfo(messageC, jo.get("toId").toString());
            } catch (Exception e) { }
        }
//        try {
//            if(jo.get("type") == null) {
////                Message messageC = new Message(2, 1, "???", new Date().getTime());
////                messageService.newMessage(messageC);
//                sendInfo("???", jo.get("fromId").toString());
//            }
//        } catch (Exception e) {}

        log.info("【websocket消息】收到客户端发来的消息:{}", jo.get("context"));
    }

    /**
     *
     * @param session
     * @param error
     */
    @OnError
    public void onError(Session session, Throwable error) {
        log.error("用户错误:"+this.userId+",原因:"+error.getMessage());
        error.printStackTrace();
    }
    /**
     * 实现服务器主动推送
     */
    public void sendMessage(String message) throws IOException {
        this.session.getBasicRemote().sendText(message);
    }

    /**
     * 发送自定义消息
     * */
    public static void sendInfo(Message message,@PathParam("userId") String userId) throws IOException {
        log.info("发送消息到:"+userId+"，报文:"+message.toString());
        if(userId != ""&&webSocketMap.containsKey(userId)){
//            Map map = new HashMap();
//            map.put("toId", 1);
//            map.put("fromId", 2);
//            map.put("context", message);
            webSocketMap.get(userId).sendMessage(JSON.toJSONString(message));
        }else{
            log.error("用户"+userId+",不在线！");
        }
    }

    public static synchronized int getOnlineCount() {
        return onlineCount;
    }

    public static synchronized void addOnlineCount() {
        WebSocketServer.onlineCount++;
    }

    public static synchronized void subOnlineCount() {
        WebSocketServer.onlineCount--;
    }
}
