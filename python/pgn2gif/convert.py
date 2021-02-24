import pgn2gif

creator = pgn2gif.PgnToGifCreator(reverse=True, duration=0.1, ws_color='white', bs_color='gray')
creator.create_gif("game1.pgn", out_path="./chess/game1.gif")
