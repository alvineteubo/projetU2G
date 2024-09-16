/* 1) Using .map()
 *
 * Using the musicData array and .map():
 *   - return a string for each item in the array in the following format
 *     <album-name> by <artist> sold <sales> copies
 *   - store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - do not delete the musicData variable
 *   - do not alter any of the musicData content
 *   - do not format the sales number, leave it as a long string of digits
 */

/* 2) Using .filter()
 *
 * Using the musicData array and .filter():
 *   - return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - store the returned data in a new `results` variable
 *
 * Note:
 *   - do not delete the musicData variable
 *   - do not alter any of the musicData content
 */

/* 3) Combining .filter() and .map()
 *
 * Using the musicData array, .filter, and .map():
 *   - filter the musicData array down to just the albums that have
 *     sold over 1,000,000 copies
 *   - on the array returned from .filter(), call .map()
 *   - use .map() to return a string for each item in the array in the
 *     following format: "<artist> is a great performer"
 *   - store the array returned form .map() in a new "popular" variable
 *
 * Note:
 *   - do not delete the musicData variable
 *   - do not alter any of the musicData content
 */

const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
  { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
  { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
  {
    artist: "Original Broadway Cast Recording",
    name: "Hamilton: An American Musical",
    sales: 820000,
  },
  { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
  { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
  { artist: "Rihanna", name: "Anti", sales: 603000 },
  { artist: "Justin Bieber", name: "Purpose", sales: 554000 },
];
//console.log( musicData)

const newARR = musicData.map((item)=>(`${item.name} by ${item.artist} sold ${item.sales} copies`) );
//const  newARR =  musicData.map((item)=>(item.name +" by "+ item.artist +" sold "+ item.sales +" copies "))
//console.log(newARR)

const filtering = musicData.filter((item)=>(item.name.length>=10 && item.name.length<=25))
//console.log(filtering);


const finalArr =  musicData
.filter((item => item.sales>=1000000)
.map(item =>`${item.artist} is a great performer`));
console.log(finalArr);















