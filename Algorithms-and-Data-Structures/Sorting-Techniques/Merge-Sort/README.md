# Merge Sort

<ul>
  <li>Merge Sort is a classic divide and conquer problem.</li>
  <li>The following steps are involved :</li>
  <ul>
    <li>Divide: We break the array from the middle using recusion until we’re left with 1 element. </li>
    <li>Conquer: Then we sort these small arrays.</li>
    <li>Combine: Finally, we merge these small arrays into one sorted array and keep doing it until we combine all the arrays.</li>
  </ul>
  <li>Time complexity of Merge Sort is O(n * log n).</li>
  <li>Space complexity of Merge Sort is O(log n).</li>
</ul>

<p align="center" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif" alt="Merge Sort in action" width="300" height="180">
</p>

> Example :

<ul>
  <li>Initially we have an array of 6 unsorted integers Arr(6, 5, 3, 1, 8, 7, 2, 4)</li>
  <li>We split the array into two halves Arr1 = (6, 5, 3, 1) and Arr2 = (8, 7, 2, 4).</li>
  <li>Again, we divide them into two halves: Arr3 = (6, 5) and Arr4 = (3, 1) and Arr5 = (8, 7) and Arr6 = (2, 4)</li>
  <li>We will now compare the elements in these sub arrays in order to merge them.</li>
</ul>

> Pseudocode

````
procedure mergesort( var a as array )
   if ( n == 1 ) return a

   var l1 as array = a[0] ... a[n/2]
   var l2 as array = a[n/2+1] ... a[n]

   l1 = mergesort( l1 )
   l2 = mergesort( l2 )

   return merge( l1, l2 )
end procedure

procedure merge( var a as array, var b as array )

   var c as array
   while ( a and b have elements )
      if ( a[0] > b[0] )
         add b[0] to the end of c
         remove b[0] from b
      else
         add a[0] to the end of c
         remove a[0] from a
      end if
   end while
   
   while ( a has elements )
      add a[0] to the end of c
      remove a[0] from a
   end while
   
   while ( b has elements )
      add b[0] to the end of c
      remove b[0] from b
   end while
   
   return c
	
end procedure
````
