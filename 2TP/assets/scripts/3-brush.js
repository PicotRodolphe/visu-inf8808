"use strict";

/**
* Fichier permettant de gérer le zoom/brush.
*/


/**
 * Permet de redessiner le graphique focus à partir de la zone sélectionnée dans le graphique contexte.
 * Nous avons enlever le yAxis, selon une remarque sur le Slack du cours, ce paramètre n'est pas utile
 * 
 * @param brush     La zone de sélection dans le graphique contexte.
 * @param g         Le groupe SVG dans lequel le graphique focus est dessiné.
 * @param line      La fonction permettant de dessiner les lignes du graphique.
 * @param xFocus    L'échelle en X pour le graphique focus.
 * @param xContext  L'échelle en X pour le graphique contexte.
 * @param xAxis     L'axe X pour le graphique focus.
 *
 * @see http://bl.ocks.org/IPWright83/08ae9e22a41b7e64e090cae4aba79ef9       (en d3 v3)
 * @see https://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172    ==> (en d3 v5) <==
 */
function brushUpdate(brush, g, line, xFocus, xContext, xAxis) {
  
}
