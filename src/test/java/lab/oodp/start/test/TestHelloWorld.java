package lab.oodp.start.test;

import org.junit.*;
import org.junit.Assert;

import lab.oodp.start.HelloWorld;

public class TestHelloWorld {
	
	public HelloWorld hello = null;

	@Before
	public void setUp() {
		hello = new HelloWorld();
	}

	@Test
	public void testHello() {
		Assert.assertEquals( "Hello James", hello.hello("James"));
	}
	

}
