package com.beweb.lunel.programmationCours.Exos.Objets.Exos_POO.exos_en_vrac.algo;

public class Exercice8 
{
    public static void launch()
    {
        int i = 243;
        while(i != 0)
        {
            if(i%2 == 0)
            {
                System.out.println(i +" est paire.");
            }
            if(i%5 == 0)
            {
                System.out.println(i + " est un multiple de 5.");
            }
            if(i%10 == 0)
            {
                System.out.println(i + " est un multiple de 10.");
            }
            i--;
        }
    }
}
