package com.beweb.lunel.programmationCours.Exos.Objets.Exos_POO.exos_en_vrac.algo;

public class Exercice6 
{
    public static void launch()
    {
        boolean[] tab = new boolean[10];
        int i = 0;
        while(i<tab.length)
        {
            tab[i] = true;
            i++;
        }
        
        i = 0;
        while(i<tab.length)
        {
            tab[i] = false;
            i++;
        }
        
        i = 0;
        while(i<tab.length)
        {
            tab[i] = true;
             i = i +1;
            tab[i] = false;
            i++;
        }
        
        i = 0;
        while(i<tab.length)
        {
            System.out.println(tab[i]);
            i++;
        }
        System.out.println("Exercice 6 Done");
    }
}
