## PLAN
For functionality we need to break up the words into parts, the prefix, suffix, and index.  We can use the eachWord.slice method to turn each word into seperate strings of letters starting at the 0 index.  

We need to segment each question into its own statement in the else if statement.  

We begin with the vowelsArray in the if statement and iterate over the entire length and if the length of the array strictly has no remainder, or has no vowels "ay" will be added to the end of eachWord by using += "ay".

If that condition is not met, we will else if and iterate over the entire vowelsArray and use the .includes method to look for the letter "u".  If the inputed word has the letter "u" AND the letter "q" we can use .includes and .indexOf methods to move the q and the u, but we have to seperatley idenfiy them and include the logical and (&&).

If none of those conditions are met our catch all will be to move the first consonants to the end of the word and add "ay" by using the .indexOf to find the first letter at the zero index, slicing the word into seperate strings, slicing the index, and adding the suffix and prefix and adding the "ay".  

One big else if statement.
