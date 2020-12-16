package com.marklogic.sample;

import java.io.IOException;
import java.io.Reader;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.marklogic.client.DatabaseClient;
import com.marklogic.client.DatabaseClientFactory;
import com.marklogic.client.DatabaseClientFactory.DigestAuthContext;

public class Main {

    public static void main(String[] args) throws IOException {
        DatabaseClient db  = DatabaseClientFactory.newClient("localhost", 8003, new DigestAuthContext("admin", "admin"));
        Reader reader = Api.on(db).sample("hello");
        
        ObjectMapper mapper = new ObjectMapper();
        JsonNode json = mapper.readTree(reader);
        System.out.println(json);
    }

}

