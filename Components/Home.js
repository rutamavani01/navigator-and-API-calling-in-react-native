import { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const { height, width } = Dimensions.get('window');

export const Home = () => {
    const [data, setData] = useState([
        'https://www.thespruce.com/thmb/_4DZ0oYnRlYORcwejqavBvseb28=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1295250677-383499fffc3d4bb7a4129d43abfcc0d9.jpg',
        'https://static.vecteezy.com/system/resources/previews/026/704/823/non_2x/decoration-of-a-small-peperomia-plant-in-pot-on-aesthetic-white-wall-background-with-sunlight-photo.jpg',
        'https://www.thespruce.com/thmb/_4DZ0oYnRlYORcwejqavBvseb28=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1295250677-383499fffc3d4bb7a4129d43abfcc0d9.jpg',
        'https://static.vecteezy.com/system/resources/previews/026/704/823/non_2x/decoration-of-a-small-peperomia-plant-in-pot-on-aesthetic-white-wall-background-with-sunlight-photo.jpg'
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // date & time
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black', marginBottom: 10, fontSize: 20 }}>Home Page</Text>
            <View style={{ height: height / 2 + 50, marginTop: -100 }}>
                <FlatList
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    onScroll={e => {
                        const x = e.nativeEvent.contentOffset.x;
                        const index = (x / width).toFixed(0);
                        setCurrentIndex(parseInt(index, 10));
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                width: width,
                                height: height / 2 + 50,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <TouchableOpacity
                                    disabled={true}
                                    style={{
                                        width: '90%',
                                        height: '60%',
                                        backgroundColor: 'black',
                                        borderRadius: 20,
                                        marginTop: 0
                                    }}>
                                    <Image source={{ uri: item }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                                </TouchableOpacity>
                            </View>
                        );
                    }} />
            </View>

            {/* dot */}
            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
                {
                    data.map((v, index) => {
                        return (
                            <View key={index} style={{
                                width: currentIndex == index ? 20 : 8,
                                height: currentIndex == index ? 10 : 8,
                                borderRadius: currentIndex == index ? 5 : 4,
                                backgroundColor: currentIndex === index ? 'green' : '#303030',
                                marginLeft: 5
                            }}></View>
                        );
                    })
                }
            </View>

            {/* date & time */}
            <View style={{ marginBottom: 20, alignItems: 'center' }}>
                <Text style={styles.dateText}>{formatDate(currentTime)}</Text>
                <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dateText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    timeText: {
        fontSize: 24,
        color: '#000',
    },
});
