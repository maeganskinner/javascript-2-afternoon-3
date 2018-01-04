describe('callbackPractice', function () {
  describe('logFirstName', function() {
    it('should exist and be a function', function() {
      expect( logFirstName ).toBeDefined();
      expect( logFirstName ).toEqual( jasmine.any(Function) );
    });
  });

	describe('first', function () {
		it('should exist and be a function', function () {
			expect( first ).toBeDefined();
			expect( first ).toEqual( jasmine.any(Function) );
    });

    it('should call logFirstName with the first item of an array', function() {
      var arr = [ 'a', 'b', 'c', 'd' ];

      var cbSpy = jasmine.createSpy( logFirstName );

      first( arr, cbSpy );

      expect( cbSpy ).toHaveBeenCalledWith( arr[0] );
    });
  });

  describe('logLastName', function() {
    it('should exist and be a function', function() {
      expect( logLastName ).toBeDefined();
      expect( logLastName ).toEqual( jasmine.any(Function) );
    });
  })
  
	describe('last', function () {
		it('should exist and be a function', function () {
			expect( last ).toBeDefined();
			expect( last ).toEqual(jasmine.any(Function));
    });

    it('should call logLastName with the last item of an array', function() {
      var arr = [ 'a', 'b', 'c', 'd' ];

      var cbSpy = jasmine.createSpy( logLastName );

      last( arr, cbSpy );

      expect( cbSpy ).toHaveBeenCalledWith( arr[ arr.length - 1 ] );
    });
  });
  
  describe('logProduct', function() {
    it('should exist and be a function', function() {
      expect( logProduct ).toBeDefined();
      expect( logProduct ).toEqual( jasmine.any(Function) );
    });
  });


	describe('multiply', function () {
		it('should exist and be a function', function () {
			expect( multiply ).toBeDefined();
			expect( multiply ).toEqual( jasmine.any(Function) );
    })
    
    it('should call logProduct with the product of given numbers', function() {
      var cbSpy = jasmine.createSpy( logProduct );

      multiply( 6, 5, cbSpy );

      expect( cbSpy ).toHaveBeenCalledWith( 30 );
    });
  });

  describe("printContainMessage", function() {
    it('should exist and be a function', function() {
      expect( printContainMessage ).toBeDefined();
      expect( printContainMessage ).toEqual( jasmine.any(Function) );
    });
  });

  describe("contains", function() {
    it('should exist and be a function', function() {
      expect( contains ).toBeDefined();
      expect( printContainMessage ).toEqual( jasmine.any(Function) );
    });

    it('should call printContainMessage with a true statement', function() {
      var names = [ "Bob", "Joe" ];

      var cbSpy = jasmine.createSpy( printContainMessage );

      contains( names, "Bob", cbSpy );

      expect( cbSpy ).toHaveBeenCalledWith( "Bob", true );
    });

    it('should call printContainMessage with a false statement', function() {
      var names = [ "James", "Jeremy" ];

      var cbSpy = jasmine.createSpy( printContainMessage );

      contains( names, "Missy", cbSpy );

      expect( cbSpy ).toHaveBeenCalledWith( "Missy", false );
    });
  });

  describe("printUnique", function() {
    it('should exist and be a function', function() {
      expect( printUnique ).toBeDefined();
      expect( printUnique ).toEqual( jasmine.any(Function) );
    });
  });

  describe("unique", function() {
    it('should exist and be a function', function() {
      expect( unique ).toBeDefined();
      expect( unique ).toEqual( jasmine.any(Function) );
    });

    it('should call printUnique with a unique array', function() {
      var arr = [ "Bob", "Bob", "Joe", "Joe" ];

      var cbSpy= jasmine.createSpy( printUnique );

      unique( arr, cbSpy );

      expect( cbSpy ).toHaveBeenCalledWith([ "Bob", "Joe" ]);
    });
  });

  describe("printEachIndexAndValue", function() {
    it('should exist and be a function', function() {
      expect( printEachIndexAndValue ).toBeDefined();
      expect( printEachIndexAndValue ).toEqual( jasmine.any(Function) );
    });
  });

  describe('each', function() {
    it('should exist and be a function', function() {
      expect( each ).toBeDefined();
      expect( each ).toEqual( jasmine.any(Function) );
    });

    it('should call printEachIndexAndValue for each element in a given array', function() {
      var arr = [ 'a', 'b', 'c' ];
      
      var cbSpy = jasmine.createSpy( printEachIndexAndValue );

      each( arr, cbSpy );

      expect( cbSpy.calls.count() ).toEqual( arr.length );

      expect( cbSpy.calls.argsFor(0)[0] ).toEqual(0);
      expect( cbSpy.calls.argsFor(0)[1] ).toEqual('a');

      expect( cbSpy.calls.argsFor(1)[0] ).toEqual(1);
      expect( cbSpy.calls.argsFor(1)[1] ).toEqual('b');

      expect( cbSpy.calls.argsFor(2)[0] ).toEqual(2);
      expect( cbSpy.calls.argsFor(2)[1] ).toEqual('c');
    });
  });

  describe("printUserProps", function() {
    it('should exist and be a function', function() {
      expect( printUserProps ).toBeDefined();
      expect( printUserProps ).toEqual( jasmine.any(Function) );
    });
  });

  describe("getUserById", function() {
    it('should exist and be a function', function() {
      expect( getUserById ).toBeDefined();
      expect( getUserById ).toEqual( jasmine.any(Function) );
    });

    it('should call printUserProps with the correct user object by id', function() {
      var users = [ { id: '0', email: 'a', name: 'b', address: 'c' }, { id: '1', email: 'd', name: 'e', address: 'f' } ];

      var cbSpy = jasmine.createSpy( printUserProps );

      getUserById( users, '0', cbSpy );

      expect( cbSpy ).toHaveBeenCalledWith( users[0] );
    });
  });
});