ALM_CR_E.SURR=new Array(PATH_BETW_AH_IH, IH_NE_CRN);
PATH_BETW_AH_IH.SURR=new Array(ALM_CR_E,IH_NE_CRN,IH_NW_CRN);
IH_NE_CRN.SURR=new Array(ALM_CR_E,PATH_BETW_AH_IH );

//
IH_NW_CRN.SURR=new Array(PATH_BETW_AH_IH,GY_NW_CRN);

//
MT_ENT_N.SURR=new Array(PATH_BETW_CC_GY,NML_LIBR);
PATH_BETW_CC_GY.SURR=new Array(MT_ENT_N,IH_W_ENT);
IH_W_ENT.SURR=new Array(PATH_BETW_CC_GY,IH_SW_CRN);

//

UDR_S.SURR=new Array(PATH_RB_CAMR,RO_OT_W,PATH_P2_B_ENT,RO_ENT_PATH);
PATH_RB_CAMR.SURR=new Array(UDR_S,RO_OT_W,PATH_P2_B_ENT);
RO_OT_W.SURR=new Array(PATH_RB_CAMR,PATH_P2_B_ENST,UDR_S);
PATH_P2_B_ENT.SURR=new Array(PATH_RB_CAMR,RO_OT_W,SC_M_ENT_E,NMC_LIBR);





// path arrays 

S_HC-PATH.SURR=new Array(S_SR_PATH,S_LB_PATH);
FS_LB_PATH.SURR=new Array(FS_HC_PATH,LE_SE_ENT);
S_LB_PATH.SURR=new Array(S_HC_PATH,S_LB_PATH);


//

S_PA_PATH.SURR=new Array(PA_W_ENT,SE_PA_PATH);
SE_PA_PATH.SURR=new Array(PA_E_ENT,PATH_HZ);
PA_E_ENT.SURR=new Array(SE_PA_PATH,PATH_HZ);
PATH_HZ.SURR=new Array(PATH_TB_STAIR,PATH_BETW_TB_HZ,PA_E_ENT,SE_PA_PATH);


//
M_COURT.SURR=new Array(SE_ML_PATH,NE_ML_ENT,S_DT_ENT,COURT_ENT_W_TB,PA_N_ENT);
PA_N_ENT.SURR=new Array(SE_ML_PATH,S_TB_CRN);
S_TB_CRN.SURR=new Array(PATH_TB_STAIR,ENT_TB_SW,SE_ML_PATH);
ENT_TB_SW.SURR=new ArrAY(COURT_ENT_W_TB,S_TB_CRN);

//
PATH_BETW_HZ_SC.SURR=new Array(PATH_BETW_RB_HZ,PATH_CRN_HZ);
PATH_BETW_RB_HZ.SURR=new Array(PATH_HZ_UNIDR_A,PATH_BETN_HZ_SC);
PATH_HZ_UNIDR_A.SURR=new Array(PATH_HZ_UNIDR_B);
PATH_HZ_UNIDR_B.SURR=new Array(PATH_HZ_A,LE_SE_ENT);


//part3

LE_SE_ENT.SURR=new Array(PATH_HZ_UNIDR_B,FS_LB_PATH);
PATH_BETW_UC_SC.SURR=new Array(PATH_P2_B,PATH_CRN_SC,SC_M_ENT_E);
PATH_P2_B.SURR=new Array(PATH_BETW_SC,AA_E_CRN,UC_NE_ENT);


//







