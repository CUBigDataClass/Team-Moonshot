// Spark code to convert the raw tweets fetched from Flume, to structured Data.

//Code developed by AAYUSH GROVER

import org.apache.spark.SparkContext;

object TweetsToStructuredData {
  def main(args: Array[String]) {
    val ipFile = "hdfs://localhost:9000/user/flume/tweets/FlumeData.1459168361335"
    val conf = new SparkConf().setAppName("TweetstoStructuredData").setMaster("local[2]")
   val sc = new SparkContext(conf)
    val ip = sc.textFile(ipFile)
    val temp = ip.filter(._startsWith("text"))
    val messages = temp.map(._split(" ;:,"))
    messages.cache
    val beer = messages.filter(_.contains("beer")).count
    val whiskey = messages.filter(_.contains("whiskey")).count
    val wine = messages.filter(_.contains("wine")).count
    val vodka = messages.filter(_.contains("vodka")).count
    val tequila = messages.filter(_.contains("tequila")).count
    val rum = messages.filter(_.contains("rum")).count
    val sneakers = messages.filter(_.contains("sneakers")).count
    val sportsshoes = messages.filter(_.contains("sports shoes")).count
    val sandals = messages.filter(_.contains("sandals")).count
    val heels = messages.filter(_.contains("heels")).count
    val boots = messages.filter(_.contains("boots")).count
    val spikeshoes = messages.filter(_.contains("spike shoes")).count
    val aviator = messages.filter(_.contains("aviator")).count
    val wayfarer = messages.filter(_.contains("wayfarer")).count
    val digitalwatch = messages.filter(_.contains("digital watch")).count
    val skeletonwatch = messages.filter(_.contains("skeleton watch")).count
    val analogwatch = messages.filter(_.contains("analog watch")).count
    val leatherwallet = messages.filter(_.contains("leather wallet")).count
    val dslr = messages.filter(_.contains("dslr")).count
    val tablet = messages.filter(_.contains("tablet PC")).count
    val playstation = messages.filter(_.contains("playstation")).count
    val laptopbag = messages.filter(_.contains("laptop bag")).count 
    val RuckSack = messages.filter(_.contains("RuckSack")).count
    val Traveller Bag = messages.filter(_.contains("Traveller Bag")).count
    val dufflebag = messages.filter(_.contains("duffle bag")).count
    val slingbag = messages.filter(_.contains("sling bag")).count
    val bucketbag = messages.filter(_.contains("bucket bag")).count
    val clutchbag = messages.filter(_.contains("clutch bag")).count
    val hobobag = messages.filter(_.contains("hobo bag")).count
    val foldoverclutch = messages.filter(_.contains("fold over clutch")).count
    val messengerbag = messages.filter(_.contains("messenger bag")).count
    val Minaudiere = messages.filter(_.contains("Minaudiere")).count
    val Satchel = messages.filter(_.contains("Satchel")).count
    val Wristlet = messages.filter(_.contains("Wristlet")).count
    val SkateBoard = messages.filter(_.contains("SkateBoard")).count
    val RollerSkates = messages.filter(_.contains("RollerSkates")).count
    val HoverBoard = messages.filter(_.contains("HoverBoard")).count
    val electric scooter = messages.filter(_.contains("electric scooter")).count
    val SurfingBoard = messages.filter(_.contains("Surfing Board")).count
    val Hairgel = messages.filter(_.contains("Hairgel")).count
    val Hairspray = messages.filter(_.contains("Hairspray")).count
    val Hairoil = messages.filter(_.contains("Hairoil")).count
    val Sunscreen = messages.filter(_.contains("Sunscreen")).count
    val BodySpray = messages.filter(_.contains("BodySpray")).count
    val Showergel = messages.filter(_.contains("Showergel")).count
    val Shampoo = messages.filter(_.contains("Shampoo")).count
    val Moisturizer = messages.filter(_.contains("Moisturizer")).count
    val lipstick = messages.filter(_.contains("lipstick")).count
    val eyeliner = messages.filter(_.contains("eyeliner")).count
    val lipgloss = messages.filter(_.contains("lipgloss")).count
    val Juice = messages.filter(_.contains("Juice")).count
    val Tea = messages.filter(_.contains("Tea")).count
    val Coffee = messages.filter(_.contains("coffee")).count
    val Whole Milk = messages.filter(_.contains("whole milk")).count
    val Flavored Milk = messages.filter(_.contains("flavored milk")).count
    val Lactose Free Milk = messages.filter(_.contains("lactose free milk")).count
    val buttermilk = messages.filter(_.contains("buttermilk")).count
    val cookie = messages.filter(_.contains("cookie")).count
    val Donut = messages.filter(_.contains("donut")).count
    val pastry = messages.filter(_.contains("pastry")).count
    val cheesecake = messages.filter(_.contains("cheesecake")).count
    val pancake = messages.filter(_.contains("pancake")).count
    val icecream = messages.filter(_.contains("icecream")).count
    val chocolate = messages.filter(_.contains("chocolate")).count
    
    println("wine : %s, beer : %s, Vodka : %s, whiskey : %s, Rum : %s, Tequila : %s,"
"sneakers : %s, sports shoes : %s, sandals : %s, heels : %s, boots : %s, spike shoes : %s,"
"aviator : %s, wayfarer : %s, digital watch : %s, skeleton watch : %s, analog watch : %s, leather wallet : %s,"
        "Dslr : %s, tablet PC : %s, playstation : %s"
        "laptop bag : %s, RuckSack : %s, Traveler bag : %s, duffle bag : %s, sling bag : %s"
        "bucket bag : %s, clutch bag : %s, hobo bag : %s, fold over clutch : %s, messenger bag : %s, Minaudiere : %s, Satchel : %s, Wristlet : %s"
        "SkateBoard : %s, roller skates : %s, hoverboard : %s , electric scooter : %s, surfing board : %s"
        "Hairgel : %s, hairspray : %s, hairoil : %s, bodyspray : %s, showergel : %s, shampoo : %s, sunscreen : %s, moisturizer : %s, lipstick : %s, lipgloss : %s, eyeliner : %s"
        "Juice : %s, tea : %s, coffee : %s"
        "Whole milk : %s, flavored milk : %s, lactose free milk : %s,buttermilk : %s"
        "Cookie : %s, Donut : %s, pastry : %s, cheesecake : %s, pancake : %s, icecream : %s, chocolate : %s"
        .format(wine, beer, Vodka, whiskey, Rum, Tequila,sneakers, sports shoes, sandals, heels, boots, spike shoes,
            aviator, wayfarer, digital watch, skeleton watch, analog watch, leather wallet,
            Dslr, tablet, playstation,laptop bag, RuckSack, Traveler bag, duffle bag, sling bag
            bucket bag, clutch bag, hobo bag, fold over clutch, messenger bag, Minaudiere, Satchel, Wristlet,
            SkateBoard, roller skates, hoverboard , electric scooter, surfing board,
            Hairgel, hairspray, hairoil, bodyspray, showergel, shampoo, sunscreen, moisturizer, lipstick, lipgloss, eyeliner,
            Juice, tea, coffee,Whole milk, flavored milk, lactose free milk,buttermilk,
            Cookie, Donut, pastry, cheesecake, pancake, icecream, chocolate));
  
    
    
  }
}