package com.clientsapi.controller.v1;

import com.clientsapi.model.Client;
import com.clientsapi.service.v1.ClientService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/clients")
@CrossOrigin(originPatterns = {"${cors.originPatterns}"})
public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping
    public ResponseEntity<List<Client>> findAll() {
        return ResponseEntity.ok(clientService.findAll());
    }

    @PostMapping
    public ResponseEntity<Client> save(@Valid @RequestBody Client client) {
        return new ResponseEntity<>(clientService.save(client), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Client> findById(@PathVariable(value = "id") Long id) {
        return ResponseEntity.ok(clientService.findById(id));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable(value = "id") Long id) {
        clientService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> update(@Valid @RequestBody Client client) {
        clientService.update(client);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
