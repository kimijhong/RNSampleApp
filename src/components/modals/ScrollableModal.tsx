import Modal from 'react-native-modal';
import React, { useState, useEffect, RefObject } from 'react';
import { View, Text, Button } from 'native-base';
import { Dimensions, Platform, StyleSheet, Alert, ScrollView } from 'react-native';

interface Props {
    isModalVisible: boolean
    title?: string
    msg: string
    cancelText?: string
    confirmText?: string
    confirmClick?: () => void
    cancelClick: (reqData?: string) => void
}

const ScrollableModal = ({ isModalVisible, title, msg, cancelText, confirmText, confirmClick, cancelClick }: Props) => {
    
    let scrollViewRef: RefObject<ScrollView> = React.createRef();
    const [scrollOffset, setScrollOffset] = useState<number>(0)

    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Platform.OS === "ios"
        ? Dimensions.get("window").height
        : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");

    useEffect(() => {
        scrollViewRef = React.createRef();
        console.log(scrollViewRef);
        return () => {
        }
    }, [])

    const handleOnScroll = (event: any) => {
        setScrollOffset(event.nativeEvent.contentOffset.y)
    }

    const handleScrollTo = (p: any) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo(p);
        }
    };

    return (
        <View>
            <Modal
                isVisible={isModalVisible}
                onSwipeComplete={() => { cancelClick() }}
                swipeDirection={['down']}
                scrollTo={(e)=>{handleScrollTo(e)}}
                scrollOffset={scrollOffset}
                scrollOffsetMax={400 - 300} // content height - ScrollView height
                propagateSwipe={true}
                style={styles.modal}>

                <View style={styles.scrollableModal}>
                    <ScrollView
                        ref={scrollViewRef}
                        onScroll={handleOnScroll}
                        scrollEventThrottle={16}>
                        <View style={styles.scrollableModalContent1}>
                            <Text style={styles.scrollableModalText1}>
                                You can scroll me up! 👆</Text>
                        </View>
                        <View style={styles.scrollableModalContent2}>
                            <Text style={styles.scrollableModalText2}>
                                Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>
                                Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>
                                Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>
                                Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>
                                Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>
                                Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>
                                Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>
                                Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>
                                Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>
                                Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>
                                Same here as well! ☝</Text>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )

  
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    scrollableModal: {
        height: 300,
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: '#87BBE0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText1: {
        fontSize: 20,
        color: 'white',
    },
    scrollableModalContent2: {
        height: 200,
        backgroundColor: '#A9DCD3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText2: {
        fontSize: 20,
        color: 'white',
    },
});

export default ScrollableModal