﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proekt_na_generaciyu
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Маркетолог.
    /// </summary>
    // *** Start programmer edit section *** (Маркетолог CustomAttributes)

    // *** End programmer edit section *** (Маркетолог CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("МаркетологE", new string[] {
            "ФИО as \'ФИО\'",
            "Телефон as \'Телефон\'",
            "Спрос as \'Спрос\'",
            "Спрос.КатегорНомера as \'Категор номера\'",
            "ОсновПоказат as \'Основ показат\'",
            "ОсновПоказат.ВыручЗаГостя as \'Выруч за гостя\'",
            "ЦелеваяАудит as \'Целевая аудит\'",
            "ЦелеваяАудит.Пол as \'Пол\'",
            "Должность as \'Должность\'",
            "Должность.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Спрос.КатегорНомера",
            "ОсновПоказат.ВыручЗаГостя",
            "ЦелеваяАудит.Пол",
            "Должность.Наименование"})]
    [MasterViewDefineAttribute("МаркетологE", "Спрос", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "КатегорНомера")]
    [MasterViewDefineAttribute("МаркетологE", "ОсновПоказат", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ВыручЗаГостя")]
    [MasterViewDefineAttribute("МаркетологE", "ЦелеваяАудит", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Пол")]
    [MasterViewDefineAttribute("МаркетологE", "Должность", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("МаркетологL", new string[] {
            "ФИО as \'ФИО\'",
            "Телефон as \'Телефон\'",
            "Спрос.КатегорНомера as \'Категор номера\'",
            "ОсновПоказат.ВыручЗаГостя as \'Выруч за гостя\'",
            "ЦелеваяАудит.Пол as \'Пол\'",
            "Должность.Наименование as \'Наименование\'"})]
    public class Маркетолог : IIS.Proekt_na_generaciyu.Персонал
    {
        
        private IIS.Proekt_na_generaciyu.Спрос fСпрос;
        
        private IIS.Proekt_na_generaciyu.ОсновПоказат fОсновПоказат;
        
        private IIS.Proekt_na_generaciyu.ЦелеваяАудит fЦелеваяАудит;
        
        // *** Start programmer edit section *** (Маркетолог CustomMembers)

        // *** End programmer edit section *** (Маркетолог CustomMembers)

        
        /// <summary>
        /// Маркетолог.
        /// </summary>
        // *** Start programmer edit section *** (Маркетолог.ОсновПоказат CustomAttributes)

        // *** End programmer edit section *** (Маркетолог.ОсновПоказат CustomAttributes)
        [PropertyStorage(new string[] {
                "ОсновПоказат"})]
        [NotNull()]
        public virtual IIS.Proekt_na_generaciyu.ОсновПоказат ОсновПоказат
        {
            get
            {
                // *** Start programmer edit section *** (Маркетолог.ОсновПоказат Get start)

                // *** End programmer edit section *** (Маркетолог.ОсновПоказат Get start)
                IIS.Proekt_na_generaciyu.ОсновПоказат result = this.fОсновПоказат;
                // *** Start programmer edit section *** (Маркетолог.ОсновПоказат Get end)

                // *** End programmer edit section *** (Маркетолог.ОсновПоказат Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Маркетолог.ОсновПоказат Set start)

                // *** End programmer edit section *** (Маркетолог.ОсновПоказат Set start)
                this.fОсновПоказат = value;
                // *** Start programmer edit section *** (Маркетолог.ОсновПоказат Set end)

                // *** End programmer edit section *** (Маркетолог.ОсновПоказат Set end)
            }
        }
        
        /// <summary>
        /// Маркетолог.
        /// </summary>
        // *** Start programmer edit section *** (Маркетолог.Спрос CustomAttributes)

        // *** End programmer edit section *** (Маркетолог.Спрос CustomAttributes)
        [PropertyStorage(new string[] {
                "Спрос"})]
        [NotNull()]
        public virtual IIS.Proekt_na_generaciyu.Спрос Спрос
        {
            get
            {
                // *** Start programmer edit section *** (Маркетолог.Спрос Get start)

                // *** End programmer edit section *** (Маркетолог.Спрос Get start)
                IIS.Proekt_na_generaciyu.Спрос result = this.fСпрос;
                // *** Start programmer edit section *** (Маркетолог.Спрос Get end)

                // *** End programmer edit section *** (Маркетолог.Спрос Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Маркетолог.Спрос Set start)

                // *** End programmer edit section *** (Маркетолог.Спрос Set start)
                this.fСпрос = value;
                // *** Start programmer edit section *** (Маркетолог.Спрос Set end)

                // *** End programmer edit section *** (Маркетолог.Спрос Set end)
            }
        }
        
        /// <summary>
        /// Маркетолог.
        /// </summary>
        // *** Start programmer edit section *** (Маркетолог.ЦелеваяАудит CustomAttributes)

        // *** End programmer edit section *** (Маркетолог.ЦелеваяАудит CustomAttributes)
        [PropertyStorage(new string[] {
                "ЦелеваяАудит"})]
        [NotNull()]
        public virtual IIS.Proekt_na_generaciyu.ЦелеваяАудит ЦелеваяАудит
        {
            get
            {
                // *** Start programmer edit section *** (Маркетолог.ЦелеваяАудит Get start)

                // *** End programmer edit section *** (Маркетолог.ЦелеваяАудит Get start)
                IIS.Proekt_na_generaciyu.ЦелеваяАудит result = this.fЦелеваяАудит;
                // *** Start programmer edit section *** (Маркетолог.ЦелеваяАудит Get end)

                // *** End programmer edit section *** (Маркетолог.ЦелеваяАудит Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Маркетолог.ЦелеваяАудит Set start)

                // *** End programmer edit section *** (Маркетолог.ЦелеваяАудит Set start)
                this.fЦелеваяАудит = value;
                // *** Start programmer edit section *** (Маркетолог.ЦелеваяАудит Set end)

                // *** End programmer edit section *** (Маркетолог.ЦелеваяАудит Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "МаркетологE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МаркетологE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МаркетологE", typeof(IIS.Proekt_na_generaciyu.Маркетолог));
                }
            }
            
            /// <summary>
            /// "МаркетологL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МаркетологL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МаркетологL", typeof(IIS.Proekt_na_generaciyu.Маркетолог));
                }
            }
        }
    }
}
