package com.clientsapi.repository;

import com.clientsapi.model.WorkProvided;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkProvidedRepository extends JpaRepository<WorkProvided, Long> {
    @Query("SELECT w from WorkProvided w WHERE " +
            "lower(w.client.name) like lower(concat('%', :name, '%')) AND " +
            "MONTH(w.date) = :month")
    List<WorkProvided> findByClientNameAndMonth(@Param("name") String name, @Param("month") Integer month);
}
