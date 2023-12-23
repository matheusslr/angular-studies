package com.clientsapi.service.v1;

import com.clientsapi.dto.WorkProvidedDTO;
import com.clientsapi.model.Client;
import com.clientsapi.model.WorkProvided;
import com.clientsapi.repository.WorkProvidedRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkProvidedService {
    @Autowired
    private WorkProvidedRepository workProvidedRepository;
    @Autowired
    private ClientService clientService;
    private final ModelMapper modelMapper = new ModelMapper();

    public WorkProvided save(WorkProvidedDTO dto){
        WorkProvided workProvided = modelMapper.map(dto, WorkProvided.class);
        Client client = clientService.findById(dto.getIdClient());

        workProvided.setClient(client);

        return workProvidedRepository.save(workProvided);
    }

    public List<WorkProvided> findByClientNameAndMonth(String name, Integer month) {
        return workProvidedRepository.findByClientNameAndMonth(name, month);
    }
}
