package com.example.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import javax.servlet.Filter;

@Configuration
public class ServletContainsInitConfig extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

    protected Filter[] getServletFilters() {
        CharacterEncodingFilter filter = new CharacterEncodingFilter();
        filter.setEncoding("utf-8");
        System.out.println("utf-9");
        return new Filter[]{filter};
    }

    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[0];
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[0];
    }
}
//public class ServletContainsInitConfig extends AbstractDispatcherServletInitializer {
//
//    protected WebApplicationContext createServletApplicationContext() {
//        AnnotationConfigWebApplicationContext acwac = new AnnotationConfigWebApplicationContext();
//        acwac.register(SpringMvcConfig.class);
//        return acwac;
//    }
//
//    protected String[] getServletMappings() {
//        return new String[]{"/"};
//    }
//
//    protected WebApplicationContext createRootApplicationContext() {
//        return null;
//    }
//}
