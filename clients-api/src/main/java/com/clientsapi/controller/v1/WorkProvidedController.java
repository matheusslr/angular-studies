package com.clientsapi.controller.v1;

import com.clientsapi.dto.WorkProvidedDTO;
import com.clientsapi.model.WorkProvided;
import com.clientsapi.service.v1.WorkProvidedService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/works")
public class WorkProvidedController {
    @Autowired
    private WorkProvidedService service;

    @PostMapping
    public ResponseEntity<WorkProvided> save(@Valid @RequestBody WorkProvidedDTO dto) {
        return new ResponseEntity<>(service.save(dto), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<WorkProvided>> findByClientNameAndMonth(
            @RequestParam(value = "name", required = false, defaultValue = "") String name,
            @RequestParam(value = "month") Integer month
    ) {
        return ResponseEntity.ok(service.findByClientNameAndMonth(name, month));
    }
}
