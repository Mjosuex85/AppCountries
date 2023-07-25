protected void GetGenericFields(BasePriceIndexed price)
        {

            Console.WriteLine(price.CG.ToString(SixDecimalFormat, Culture));
            Fields["duracion"] = price.Duration.Name;
            Fields["cg"]       = price.CG.ToString(SixDecimalFormat, Culture);
            Fields["cf"]       = price.CF.ToString(SixDecimalFormat, Culture);
            Fields["gdo"]      = price.GDO.ToString(SixDecimalFormat, Culture);
            Fields["ifnee"]    = price.IFNEE.ToString(SixDecimalFormat, Culture);  
        }
