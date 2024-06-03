package cgu.im.helloworld01.domain;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface DramaRepository extends CrudRepository<Drama, Long> {
	///JPA查詢///
	// 查找全部的戲劇
	List<Drama> findAll();
	// 特定年份的戲劇
    List<Drama> findByDramaYear(int year);
    // 小於幾集的戲劇
    List<Drama> findByDramaEpisodeLessThan(int episodes);
    
    ///JPQL///
    // 查找某國家的戲劇
    @Query("select d from Drama d where d.dramaCountry = :dramaCountry")
    List<Drama> findByDramaCountry(@Param("dramaCountry") String Country);
    
    // 查找包含某字的戲劇
    @Query("select d from Drama d where d.dramaName like %?1%")
    List<Drama> findByDramaNameContaining(String name);

    // 查找包含某字的戲劇介紹
    @Query("select d from Drama d where d.dramaIntro like %?1%")
    List<Drama> findByDramaIntroContaining(String name);

}
