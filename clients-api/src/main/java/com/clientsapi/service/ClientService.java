package com.clientsapi.service;

import com.clientsapi.exception.ResourceNotFound;
import com.clientsapi.model.Client;
import com.clientsapi.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    public Client save(Client client) {
        client.setRegistrationDate(LocalDate.now());
        return clientRepository.save(client);
    }

    public Client findById(Long id) {
        return clientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("No records found for this ID"));
    }
}