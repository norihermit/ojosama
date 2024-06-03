package cgu.im.helloworld01.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Drama {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	private String dramaName, dramaCountry, dramaIntro;
	private int dramaYear, dramaEpisode;
	
	public Drama() {
		super();
	}
	
	public Drama(String dramaName, String dramaCountry, String dramaIntro, int dramaEpisode,int dramaYear) {
		super();
		this.dramaName = dramaName;
		this.dramaCountry = dramaCountry;
		this.dramaIntro = dramaIntro;
		this.dramaEpisode = dramaEpisode;
		this.dramaYear = dramaYear;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDramaName() {
		return dramaName;
	}

	public void setDramaName(String dramaName) {
		this.dramaName = dramaName;
	}

	public String getDramaCountry() {
		return dramaCountry;
	}

	public void setDramaCountry(String dramaCountry) {
		this.dramaCountry = dramaCountry;
	}

	public String getDramaIntro() {
		return dramaIntro;
	}

	public void setDramaIntro(String dramaIntro) {
		this.dramaIntro = dramaIntro;
	}

	public int getDramaYear() {
		return dramaYear;
	}

	public void setDramaYear(int dramaYear) {
		this.dramaYear = dramaYear;
	}

	public int getDramaEpisode() {
		return dramaEpisode;
	}

	public void setDramaEpisode(int dramaEpisode) {
		this.dramaEpisode = dramaEpisode;
	}

}
