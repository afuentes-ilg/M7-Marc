package springBootInitialDemo.controller;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springBootInitialDemo.dto.UserResponseDto;
import springBootInitialDemo.service.IUserService;

@RestController
@EnableAutoConfiguration

public class HelloWorld {
    @RequestMapping("/")
    String helloWorld(){
        return "HELLO WORLD";
    }

    @RequestMapping("/{userName}")
    String helloWorld(
            @PathVariable(name="userName")  String userName) throws Exception{
        return "Hello, " + userName;
    }

}
