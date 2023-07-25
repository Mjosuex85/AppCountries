public static string ConvertirNumero(string numeroTexto)
    {
        string numeroFormateado = numeroTexto.Replace(',', '.');

        // Usamos decimal.TryParse para asegurarnos de que el número sea válido
        if (decimal.TryParse(numeroFormateado, out decimal numeroDecimal))
        {
            string[] partes = numeroDecimal.ToString().Split('.');
            if (partes.Length > 1)
            {
                string parteDecimal = partes[1];
                parteDecimal = parteDecimal.TrimEnd('0'); // Eliminamos los ceros a la derecha
                if (parteDecimal.Length == 0)
                {
                    return partes[0] + ",0";
                }
                else
                {
                    return partes[0] + "," + parteDecimal;
                }
            }
        }

        // Si no se pudo convertir correctamente, se devuelve el número original sin cambios.
        return numeroTexto;
    }
