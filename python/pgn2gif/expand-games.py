#Expand every pgn file to only have 1 game per file.

#id=0
#for files
    #for line
        #current line
        #ticker = 0
        #buffer = ""
        #if current line == "\n"
           #ticker++
           #if next line !exist || == "\n"
              #end of file.
           #if ticker = 2
              #ticker = 0

              #validate buffer for anything weird and alert me

              #write buffer to new file ID.pgn
              #buffer = ""
              #id ++
          #else buffer ==1 or 2
             # write new line to buffer
        #else:
           #write new line to buffer
import os

singleGameFiles = 0
bulk_dir = "./bulk_games/"
output_dir = "./bulk_games/1gamefiles/"
files_scanned_count = 0

def readLines(lines):
    ticker = 0
    buffer = []
    valid_starting_chars = ["[", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "\n"]


    len = len(lines)
    for line, x in lines:
        if(line == "\n"):
            ticker += 1
            if(x - 1 == len):
                #last line.
                pass
            elif(ticker == 2):
                #end of 1 game info
                ticker = 0

                #TODO validate buffer


                #write buffer to a new file
                newFilePath = output_dir +  str(singleGameFiles) + ".pgn"
                newPGN = open(newFilePath, 'w')
                newPGN.write(buffer)
                singleGameFiles += 1
                buffer = []
            elif(ticker == 1 or ticker == 0):
                buffer.append(line)
            else:
                print("ERROR on " + str(line) + " \n of: " + str(filename))
        else:
            buffer.append(line)
            if(line[0] not in valid_starting_chars):
                print("WARNING: this is a weird line in " + str(filename) + "\n" + str(line))


for filename in os.listdir(bulk_dir):
    if filename.endswith(".asm") or filename.endswith(".py"):
         # print(os.path.join(directory, filename))
        continue
    elif(filename.endswith(".pgn")):
        #found a chess game file in bulk folder
        file = open(filename, "r")
        lines = file.readlines()
        files_scanned_count+= 1
        if files_scanned_count % 25 == 0:
            print("Files scanned: " + str(files_scanned_count))
        readLines(lines)
    else:
        print("Found a weird file...")


print("Files Completed: " + str(files_scanned_count))
