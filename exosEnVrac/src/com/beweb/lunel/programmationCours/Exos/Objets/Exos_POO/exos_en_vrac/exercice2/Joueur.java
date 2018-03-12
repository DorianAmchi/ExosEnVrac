package com.beweb.lunel.programmationCours.Exos.Objets.Exos_POO.exos_en_vrac.exercice2;

import java.util.ArrayList;

public class Joueur 
{
    public ArrayList<Integer> valeurs = new ArrayList<>();
    public String nom;

    public Joueur(String nom) 
    {
        this.nom = nom;
    }
    
    public void jet()
    {
        while(valeurs.size()<=10)
        {
            valeurs.add((int)Math.floor(Math.random()*100));
        }
    }
    
    public void affichage()
    {
        System.out.println("Le joueur " + this.nom + " a tiré les valeurs suivantes :");
        for(int i = 0; i<valeurs.size();i++)
        {
            System.out.print(valeurs.get(i) + " ");
        }
    }
    
    public int score()
    {
        int total = 0;
        
        for(int i = 0; i<valeurs.size();i++)
        {
            total = total + valeurs.get(i);
        }
        
        return total;
    }

}
