package com.beweb.lunel.programmationCours.Exos.Objets.Exos_POO.exos_en_vrac.algo;

public class Exercice4 
{
//    Le code ne peut pas etre lancé car la variable flag n'est pas initialisé.
//    A l'issu de l'algorithme, la variable i aura sa valeur initiale 0
    public static void launch()
    {
        boolean flag;
        int i = 0;
        if(!flag)
        {
            i += 1;
        }
        else if(flag)
        {
            i -= 1;
        }
        flag = !flag;
        if(flag)
        {
            i += 1;
        }
        else if(!flag)
        {
            i -= 1;
        }
        System.out.println("Exercice 4 Done");
    }
}
