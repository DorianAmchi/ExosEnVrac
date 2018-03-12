package com.beweb.lunel.programmationCours.Exos.Objets.Exos_POO.exos_en_vrac.poo;

import com.beweb.lunel.programmationCours.Exos.Objets.Exos_POO.exos_en_vrac.exercice1.Personne;
import java.util.ArrayList;

public class ObjectsMain 
{
    public static void main(String[] args)
    {
        ArrayList<Personne> personnes = new ArrayList<>();
        personnes.add(new Personne("Fabrice", "Homme", 45,175,75,"noir",
        "Bleu","Bleu","Taxi","Vegeta"));
        personnes.add(new Personne("Francine", "Femme", 35,155,45,"noir",
        "Vert","Rouge","Strip","Mars"));
        System.out.println(personnes.get(0).affichage());
    }
}
