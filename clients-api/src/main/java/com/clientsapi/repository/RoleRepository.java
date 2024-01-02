package com.clientsapi.repository;

import com.clientsapi.enums.RoleEnum;
import com.clientsapi.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByDescription(RoleEnum description);
}
