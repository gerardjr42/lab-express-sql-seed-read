\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite, image)
VALUES
('Chihiro', 'Billie Eilish', 'HIT ME HARD AND SOFT', '5:03', true, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HwSx_4xarGmGYG28v_zUeAHaEK%26pid%3DApi&f=1&ipt=1f12a7e44c465130ad14c4b4bf4f9549730221f6fd862477e58ec210af3ae86a&ipo=images'),
('Habibi', 'Tamino', 'EP', '5:06', true, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JVVEzx_tgVitfeT-j_7QzwHaEK%26pid%3DApi&f=1&ipt=015f6d7f93baf70a55344d39ac14d2a64826677890d4da49af3268b9b44b55be&ipo=images'),
('Jungle', 'Tash Sultana', 'Terra Firma', '7:14', true, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xa3GAU0O-80ibjgYDW90egHaEK%26pid%3DApi&f=1&ipt=803eb389c2aa385adc898a041d87efbab5dab68136ee7208bf19ac0abff69dbe&ipo=images');

INSERT INTO playlists (name, description, image, genre, is_private)
VALUES
('For Commute', 'A playlist for surviving the MTA', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ZCgiVECnViOLGW0fsK94bAHaE5%26pid%3DApi&f=1&ipt=b41cc4360d05bd2574dd057fb93fc762a70a8c14fb578ce3f410fe38e5345fe8&ipo=images', 'classical music', true);