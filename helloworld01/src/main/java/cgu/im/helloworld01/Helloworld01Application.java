package cgu.im.helloworld01;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import cgu.im.helloworld01.domain.AppUser;
import cgu.im.helloworld01.domain.AppUserRepository;
import cgu.im.helloworld01.domain.Drama;
import cgu.im.helloworld01.domain.DramaRepository;

@SpringBootApplication
public class Helloworld01Application implements CommandLineRunner {
	
	 private static final Logger logger =
	            LoggerFactory.getLogger(
	                    Helloworld01Application.class
	            );
	 
	private final AppUserRepository urepository;
	private final DramaRepository drepository;
	
	
	public Helloworld01Application(AppUserRepository urepository,
								   DramaRepository drepository) {
	       this.urepository = urepository;
	       this.drepository = drepository;
	}

	
	public static void main(String[] args) {
		SpringApplication.run(Helloworld01Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
        // Get all Dramas
        List<Drama> dramas = drepository.findAll();
        logger.info("Number of dramas found: {}", dramas.size());

        // Find the maximum ID
        Long maxDramaId = dramas.stream().map(Drama::getId).max(Long::compare).orElse(0L);
        logger.info("Max Drama ID: {}", maxDramaId);

        // Set the new drama ID
        //Drama drama = new Drama("voice3", "韓國國", "用聲音聽犯人", 10, 2017);
        //drama.setId(maxDramaId + 1);
        //drepository.save(drama);

        //logger.info("Saved new drama with ID: {}", drama.getId());
        
        ///JPA查詢///
        // 印出所有的戲劇名稱
        for (Drama drama1 : drepository.findAll()) {
        	logger.info("DramaName: {}",
        	drama1.getDramaName());
        }
        
        // 查詢並印出 2022 年的所有戲劇
        List<Drama> dramas2022 = drepository.findByDramaYear(2022);
        System.out.println("2022 年的戲劇有：");
        for (Drama d : dramas2022) {
            System.out.println("DramaName: " + d.getDramaName());
        }
        
        // 查詢並印出小於10集的所有戲劇
        List<Drama> shortDramas = drepository.findByDramaEpisodeLessThan(10);
        System.out.println("小於10集的戲劇有：");
        for (Drama d : shortDramas) {
            System.out.println("DramaName: " + d.getDramaName() + ", Episodes: " + d.getDramaEpisode());
        }
        
        ///JPQL查詢///
        System.out.println("------------------------");	    
        for (Drama d : drepository.findByDramaCountry("美國")) {	    	 
             	logger.info("DramaName: {},DramaYear: {},DramaCountry: {}",
        	d.getDramaName(), d.getDramaYear(), d.getDramaCountry());
        }

        for (Drama d : drepository.findByDramaNameContaining("黑暗")) {	    	 
            logger.info("name: {}",
            d.getDramaName());
        }
        for (Drama d : drepository.findByDramaIntroContaining("醫生")) {	    	 
            logger.info("name: {},dramaIntro: {}",
            d.getDramaName(),d.getDramaIntro());
        }

	}

}
