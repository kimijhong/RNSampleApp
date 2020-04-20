#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

/**
 첫 번째 인수는 JS에 노출 된 이름입니다
 두 번째 인수는 스위프트 클래스입니다
 세 번째는 슈퍼 클래스입니다
 */
//
//RCT_EXTERN_REMAP_MODULE ( RNCounter , Counter , NSObject)
@interface RCT_EXTERN_MODULE(Counter,NSObject)  //모듈을 먼저 내보내야 한다.
RCT_EXTERN_METHOD(increment)
RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getMultipleArg: (RCTResponseSenderBlock)callback)

@end
