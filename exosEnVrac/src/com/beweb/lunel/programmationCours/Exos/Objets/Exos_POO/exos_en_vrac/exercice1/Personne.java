package com.beweb.lunel.programmationCours.Exos.Objets.Exos_POO.exos_en_vrac.exercice1;

public class Personne 
{
    public String nom;
    public String genre; // Did you just assume my gender ?
    public int age;
    public int taille;
    public int poids;
    public String couleurCheveux;
    public String couleurYeux;
    public String couleurPeau;
    public String metier;
    public String planette;
    
    public Personne()
    {
        this.nom = "" ;
        this.genre = ""; // Did you just assume my gender ?
        this.age=0;
        this.taille=0;
        this.poids=0;
        this.couleurCheveux = "";
        this.couleurYeux = "";
        this.couleurPeau = "";
        this.metier = "";
        this.planette = "";
    }
    public Personne(String nom, String genre, int age, int taille, int poids,
            String couleurCheveux, String couleurYeux, String couleurPeau,
            String metier, String planette)
    {
        this.nom = nom ;
        this.genre = genre; // Did you just assume my gender ?
        this.age = age;
        this.taille = taille;
        this.poids = poids;
        this.couleurCheveux = couleurCheveux;
        this.couleurYeux = couleurYeux;
        this.couleurPeau = couleurPeau;
        this.metier = metier;
        this.planette = planette;
    }
    public String affichage()
    {
        return nom;
    }
        
}
