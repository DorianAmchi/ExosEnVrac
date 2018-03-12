package com.beweb.lunel.programmationCours.Exos.Objets.Exos_POO.exos_en_vrac.algo;

public class Exercice10 
{
    public static void launch()
    {
        int i = 0;
        int[] fibonacci = new int[100];
        while(i<100)
        {
            if(i == 0)
            {
                fibonacci[i] = 0;
                System.out.println(fibonacci[i]);
            }
            else if(i == 1)
            {
                fibonacci[i]=1;
                System.out.println(fibonacci[i]);
            }
            else
            {
                fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
                System.out.println(fibonacci[i]);
            }
            i++;
        }
    }
}
