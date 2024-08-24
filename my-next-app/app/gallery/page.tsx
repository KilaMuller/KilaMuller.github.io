"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Modal from "react-modal";

interface ImageType {
    url: string;
    width: number;
    height: number;
}

interface GalleryType {
    id: number;
    images: ImageType[];
    profile: string;
}

const data: { contents: GalleryType[] } = {
    contents: [
        {
            id: 1,
            images: [
                { url: '/White.png', width: 600, height: 400 },
            ],
            profile: 'Original'
        },
        {
            id: 2,
            images: [
                { url: '/omen irai.png', width: 600, height: 400 },
            ],
            profile: 'VALORANT Omen'
        },
        {
            id: 3,
            images: [
                { url: '/nami2.png', width: 600, height: 400 },
            ],
            profile: 'League of Legends Nami'
        },
        {
            id: 4,
            images: [
                { url: '/cypher.png', width: 600, height: 400 },
            ],
            profile: 'VALORANT Cypher'
        },
        {
            id: 5,
            images: [
                { url: '/page.png', width: 600, height: 400 },
            ],
            profile: 'Streamer Stamp'
        },
        {
            id: 6,
            images: [
                { url: '/ff14.ori1.png', width: 600, height: 400 },
            ],
            profile: 'FF14 Original'
        },
        {
            id: 7,
            images: [
                { url: '/ff14.ori2.png', width: 600, height: 400 },
            ],
            profile: 'FF14 Original'
        },
        {
            id: 8,
            images: [
                { url: '/kdaeverlyn.png', width: 600, height: 400 },
            ],
            profile: 'League of Legends Evelynn'
        },
        {
            id: 9,
            images: [
                { url: '/akajett3.png', width: 600, height: 400 },
            ],
            profile: 'League of Legends & VALORANT Akali&Jett'
        },
        {
            id: 10,
            images: [
                { url: '/f.png', width: 600, height: 400 },
            ],
            profile: 'League of Legends Fiddle Sticks'
        },
        {
            id: 11,
            images: [
                { url: '/naribu3.png', width: 600, height: 400 },
            ],
            profile: 'ウマ娘 ナリタブライアン'
        },
        {
            id: 12,
            images: [
                { url: '/rusi-do.png', width: 600, height: 400 },
            ],
            profile: 'MapleStory ルシード'
        },
        {
            id: 13,
            images: [
                { url: '/ラニちゃん.png', width: 600, height: 400 },
            ],
            profile: 'ELDENRING 魔女ラニ'
        },
        {
            id: 14,
            images: [
                { url: '/3pt.png', width: 600, height: 400 },
            ],
            profile: 'VALORANT'
        },
        {
            id: 15,
            images: [
                { url: '/ori.png', width: 600, height: 400 },
            ],
            profile: 'Original'
        },
        {
            id: 16,
            images: [
                { url: '/kiriko.png', width: 600, height: 400 },
            ],
            profile: 'OVER WATCH Kiriko'
        },
        {
            id: 17,
            images: [
                { url: '/ade2.png', width: 600, height: 400 },
            ],
            profile: 'CR Streamer Ade'
        },
        {
            id: 18,
            images: [
                { url: '/akoma.png', width: 600, height: 400 },
            ],
            profile: 'Streamer Thumbnai'
        },
        {
            id: 19,
            images: [
                { url: '/white2.png', width: 600, height: 400 },
            ],
            profile: 'Original'
        },
        {
            id: 20,
            images: [
                { url: '/loa.png', width: 600, height: 400 },
            ],
            profile: 'Original'
        }
        
    ]
};

export default function Page() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
    const [selectedDescription, setSelectedDescription] = useState<string | null>(null);

    const openModal = (image: ImageType, description: string) => {
        setSelectedImage(image);
        setSelectedDescription(description);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
        setSelectedDescription(null);
    };

    return (
        <div className={styles.container}>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>No photos available</p>
            ) : (
                <ul className={styles.galleryList}>
                    {data.contents.map((gallery) => (
                        <li key={gallery.id} className={gallery.id >= 117? styles.horizontalList : styles.list}>
                            {gallery.images.map((image) => (
                                <div key={image.url} className={styles.imageContainer}>
                                    <Image
                                        src={image.url}
                                        alt={gallery.profile}
                                        width={image.width}
                                        height={image.height}
                                        className={styles.image}
                                        onClick={() => openModal(image, gallery.profile)}
                                    />
                                </div>
                            ))}
                            <div className={styles.profile}>
                                <p className={styles.name}>{gallery.profile}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className={styles.modal}
                overlayClassName={styles.overlay}
                ariaHideApp={false}
            >
                {selectedImage && (
                    <div>
                        <Image
                            src={selectedImage.url}
                            alt={selectedDescription || ''}
                            width={selectedImage.width}
                            height={selectedImage.height}
                            className={styles.modalImage}
                        />
                        <p className={styles.description}>{selectedDescription}</p>
                        <button onClick={closeModal} className={styles.closeButton}>Close</button>
                    </div>
                )}
            </Modal>
        </div>
    );
}
