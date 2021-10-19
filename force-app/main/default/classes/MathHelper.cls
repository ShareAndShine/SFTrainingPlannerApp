public class MathHelper {

    // Property
    Integer multiplyBy = 10;
    static Integer addwith = 20; //define statics property
    
    //Function or Method
    public Integer Multiply(Integer numberToBeMultipled)
    {
        Integer outputNumber = numberToBeMultipled * multiplyBy;
        return outputNumber;
    }
    
    public static Integer Add(Integer numberToBeAdded)
    {
        //Integer outputNumber = numberToBeAdded + addwith; // Addwith has to be statics as well else it will throw an error
       
        addwith = getNumbertobeAdded();
        Integer outputNumber = numberToBeAdded + addwith; 
        
        return outputNumber;
    }
    
    private static Integer getNumbertobeAdded()
    {
       	System.debug('I m a private method!!! noone but Mathhelper class can use inside !!');
        return addwith;
    }
    
    
}