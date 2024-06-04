package cgu.im.helloworld01.web;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cgu.im.helloworld01.domain.DramaDTO;
import cgu.im.helloworld01.domain.DramaRepository;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class DramaController {

    private final DramaRepository dramaRepository;

    public DramaController(DramaRepository dramaRepository) {
        this.dramaRepository = dramaRepository;
    }

    @GetMapping("/api/dramasByClass")
    public List<DramaDTO> getDramasByClassName(@RequestParam String className) {
        return dramaRepository.findDramaWithClassesByClassName1(className);
    }
}
