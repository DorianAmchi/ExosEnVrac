package com.beweb.lunel.programmationCours.Exos.Objets.Exos_POO.exos_en_vrac.algo;

public class Exercice9 
{
    public static void launch()
    {
        int i = 243;
        int addition = 0;
        while(i != 0)
        {
            if(i%2 == 0)
            {
                addition = i + (i-2);
                System.out.println(addition);
            }
            else if(i%5 == 0)
            {
                if(i%3 == 0)
                {
                    System.out.println("vrai");
                }
            }
            else if(i%10 == 0)
            {
                addition = i + (i+1);
                System.out.println(addition);
            }
            i--;
        }
    }
}
