package com.jobportal.jobportal.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="JobPost")
public class Post {
    private String profile;
    private String desc;
    private int exp;
    private String techs[];

    public Post(String desc, int exp, String profile, String[] techs) {
        this.desc = desc;
        this.exp = exp;
        this.profile = profile;
        this.techs = techs;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getExp() {
        return exp;
    }

    public void setExp(int exp) {
        this.exp = exp;
    }

    public String[] getTechs() {
        return techs;
    }

    public void setTechs(String[] techs) {
        this.techs = techs;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Post{");
        sb.append("profile=").append(profile);
        sb.append(", desc=").append(desc);
        sb.append(", exp=").append(exp);
        sb.append(", techs=").append(techs);
        sb.append('}');
        return sb.toString();
    }
}
