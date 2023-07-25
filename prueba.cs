if (string.IsNullOrEmpty(input))
            return input;

        int length = input.Length;
        int index = length - 1;
        int zerosAfterComma = 0;
        bool commaFound = false;

        // Starting from the right, find the index of the first non-zero character.
        while (index >= 0)
        {
            if (input[index] == '0' && !commaFound)
            {
                // Count the zeros before the comma.
                zerosAfterComma++;
            }
            else if (input[index] == ',')
            {
                commaFound = true;
                break;
            }
            else
            {
                // If a non-zero character is found before a comma, stop counting zeros.
                break;
            }

            index--;
        }

        // If the last digit is a comma, remove it.
        if (index >= 0 && input[index] == ',')
        {
            index--;
        }

        // If there are any zeros after the comma, add them back.
        while (zerosAfterComma > 0)
        {
            input = input.Substring(0, index + 1) + "0" + input.Substring(index + 1);
            zerosAfterComma--;
        }

        return input;
