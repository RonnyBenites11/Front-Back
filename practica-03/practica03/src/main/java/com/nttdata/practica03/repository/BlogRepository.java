package com.nttdata.practica03.repository;

import com.nttdata.practica03.entities.BlogEntities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends JpaRepository <BlogEntities, Long> {
}
