import pgn2gif
#from pygifsicle import optimize
import sys
import random

print("===============\ninputs: ")
print(str(sys.argv) + "===============\n")

hash = sys.argv[2]
random.seed(hash)

def randomlight():
    colors=["#ffddf7","#f7d9fc","#f2d1fe","#eecdfe","#ebc9ff","#e9c6ff","#e6d3ff","#e1e1ff","#daefff","#d7feff", "#FFF5FD"]

    pick = random.choice(colors)
    #print("picked color " + pick)
    return pick

def randomdark():
    colors=["#5D60FF", "#55B6FF", "#984EFF", "#B53EFF", "#FF59D6", "#CC4FFA", "#098787"]
    return random.choice(colors)

creator = pgn2gif.PgnToGifCreator(reverse=True, duration=0.4, ws_color=randomlight(), bs_color=randomdark())
gif_data = creator.create_gif(sys.argv[1], out_path="./views/game_" + hash[0:10]+ ".gif", useString=True)



#optimize("./views/game.gif") #make it smaller
#optimize("game6.gif") #make it smaller

print("I made a gif called " + hash[0:10]+ ".gif")
