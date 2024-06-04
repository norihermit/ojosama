package cgu.im.helloworld01.domain;

public class DramaDTO {
    private Long id;
    private String dramaName;
    private String dramaCountry;
    private String dramaIntro;
    private Integer dramaYear;
    private Integer dramaEpisode;
    private String dramaClass;

    public DramaDTO() {
    }

    public DramaDTO(Long id, String dramaName, String dramaCountry, String dramaIntro, Integer dramaYear, Integer dramaEpisode, String dramaClass) {
        this.id = id;
        this.dramaName = dramaName;
        this.dramaCountry = dramaCountry;
        this.dramaIntro = dramaIntro;
        this.dramaYear = dramaYear;
        this.dramaEpisode = dramaEpisode;
        this.dramaClass = dramaClass;
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

    public Integer getDramaYear() {
        return dramaYear;
    }

    public void setDramaYear(Integer dramaYear) {
        this.dramaYear = dramaYear;
    }

    public Integer getDramaEpisode() {
        return dramaEpisode;
    }

    public void setDramaEpisode(Integer dramaEpisode) {
        this.dramaEpisode = dramaEpisode;
    }

    public String getDramaClass() {
        return dramaClass;
    }

    public void setDramaClass(String dramaClass) {
        this.dramaClass = dramaClass;
    }
}
