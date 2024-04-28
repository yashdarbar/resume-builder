"use client"

import React, { useState } from "react";
//import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
//import ReactPDF from "@react-pdf/renderer";


// const styles = StyleSheet.create({
//     page: {
//         flexDirection: "row",
//         backgroundColor: "#E4E4E4",
//     },
//     section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1,
//     },
// });

const MyDocument = () => {

    

    return (
        <div>
            <div>
                <h1>Add details</h1>
                <div>
                    <h1>Education</h1>
                    <h2>Name: {text}</h2>
                    <input value={text} message={text} onChange={textHandler}></input>
                </div>
            </div>
        </div>
        // <Document>
        //     <Page size="A4" style={styles.page}>
        //         <View style={styles.section}>
        //             <Text>Section #1</Text>
        //         </View>
        //         <View style={styles.section}>
        //             <Text>Section #2</Text>
        //         </View>
        //     </Page>
        // </Document>
    );
};



//ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);


export default MyDocument;
