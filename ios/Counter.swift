//
//  Counter.swift
//  SampleApp
//
//  Created by kimjihong on 2020/03/05.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation

@objc(Counter)
class Counter: NSObject {
  
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {    //정적인 데이터만 넘길수 있다.
    /*
    return [
      "number": 123.9,
      "string": "foo",
      "boolean": true,
      "array": [1, 22.2, "33"],
      "object": ["a": 1, "b": 2]
    ]*/
    return ["initialCount": 0]
  }
  
  @objc
   static func requiresMainQueueSetup() -> Bool {
     return true
   }
  
  /**
  string (NSString)
  number (NSInteger, float, double, CGFloat, NSNumber)
  boolean (BOOL, NSNumber)
  array (NSArray) of any types from this list
  object (NSDictionary) with string keys and values of any type from this list
  function (RCTResponseSenderBlock)
  */
  
  private var count = 0
  
   @objc
    func increment() -> NSInteger {
    count += 1
    print("count is \(count)")
    return count
   }
  
  @objc
   func getCount(_ callback: RCTResponseSenderBlock) {    //콜백 메서드 리턴
     callback([count])
   }
  
  @objc
   func getMultipleArg(_ callback: RCTResponseSenderBlock) {
     callback([
       count,               // variable
       123.9,               // int or float
       "third argument",    // string
       [1, 2.2, "3"],       // array
       ["a": 1, "b": 2]     // object
     ])
   }
  
  @objc
  func decrement(
    _ resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) -> Void {
    if (count == 0) {
      let error = NSError(domain: "", code: 200, userInfo: nil)
      reject("E_COUNT", "count cannot be negative", error)
    } else {
      count -= 1
      resolve("count was decremented")
    }
  }

  
}
