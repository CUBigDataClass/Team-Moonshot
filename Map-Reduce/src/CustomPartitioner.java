

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Partitioner;

public class CustomPartitioner extends Partitioner<Text, IntWritable>{

	@Override
	public int getPartition(Text key, IntWritable value, int numPartitions) {
		
		String str = key.toString();
//		if(str.equals("beer"))
//			return 0;
//		else 
//			return 1;
	
		String strsplit[] = str.split("\t");
	if(strsplit[0].equals("Alchohol"))
	return 0;
	else if(strsplit[0].equals("FootWear"))
	return 1;
	else if(strsplit[0].equals("Accessories"))
	return 2;
	else if(strsplit[0].equals("Electronics"))
		return 3;
	else if(strsplit[0].equals("Bags"))
		return 4;
	else if(strsplit[0].equals("Female Bags"))
		return 5;
	else if(strsplit[0].equals("Skating and Skiing"))
		return 6;
	else if(strsplit[0].equals("Cosmetics"))
		return 7;
	else if(strsplit[0].equals("Drinks"))
		return 8;
	else if(strsplit[0].equals("Milk"))
		return 9;
	else 
		return 10;
	}
}