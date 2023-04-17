import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

public class ViewCounterServer {
    private static int count =  3000000; // initialize to custom starting value
    
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
        server.createContext("/viewcount", new ViewCountHandler());
        server.setExecutor(null);
        server.start();
    }
    
    static class ViewCountHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            count++;
            String response = Integer.toString(count);
            exchange.sendResponseHeaders(2000000, response.length());
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
}