package com.clientsapi.repository;

import com.clientsapi.model.WorkProvided;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkProvidedRepository extends JpaRepository<WorkProvided, Long> {
}
