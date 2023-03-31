import React from "react";
import { AnonIcon } from "./anonIcon";
import { BlockIcon } from "./blockIcon";
import { СameraVoiсeIcon } from "./cameraVoiсeIcon";
import { CommentIcon } from "./commentIcon";
import { ContactIcon } from "./contactIcon";
import { DiscussIcon } from "./discussIcon";
import { DocumentIcon } from "./documentIcon";
import { DownloadIcon } from "./downloadIcon";
import { EditIcon } from "./editIcon";
import { FragmentCodeIcon } from "./fragmentCodeIcon";
import { ImageIcon } from "./imageIcon";
import { KarmaBtnIcon } from "./karmaBtnIcon";
import { LinkIcon } from "./linkIcon";
import { MenuIcon } from "./menuIcon";
import { PdfDocumentIcon } from "./pdfDocumentIcon";
import { ReportIcon } from "./reportIcon";
import { SaveIcon } from "./saveIcon";
import { ShareIcon } from "./shareIcon";
import { TransliteIcon } from "./transliteIcon";
import { UpdateIcon } from "./updateIcon";

export enum EIcon {
  Block, // 0
  Comment, // 1
  Menu, // 2
  Report, // 3
  Save, // 4
  Share, // 5
  Anon, // 6
  KarmaBtn, // 7
  FragmentCode, // 8
  Image, // 9
  Document, // 10
  Download, // 11
  Contact, // 12
  Update, // 13
  Link, // 14
  СameraVoiсe, // 15
  Discuss, // 16
  Edit, // 17
  Translite, // 18
  PDFDocument, // 20
}

interface IIconProps {
  width: string
  height: string
  iconName: EIcon
}

export function Icon({width, height, iconName}:IIconProps){
  return (
    <svg width={`${width}`} height={`${height}`} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {iconName === 0 && <BlockIcon/>}
      {iconName === 1 && <CommentIcon/>}
      {iconName === 2 && <MenuIcon/>}
      {iconName === 3 && <ReportIcon/>}
      {iconName === 4 && <SaveIcon/>}
      {iconName === 5 && <ShareIcon/>}
      {iconName === 6 && <AnonIcon/>}
      {iconName === 7 && <KarmaBtnIcon/>}
      {iconName === 8 && <FragmentCodeIcon/>}
      {iconName === 9 && <ImageIcon/>}
      {iconName === 10 && <DocumentIcon/>}
      {iconName === 11 && <DownloadIcon/>}
      {iconName === 12 && <ContactIcon/>}
      {iconName === 13 && <UpdateIcon/>}
      {iconName === 14 && <LinkIcon/>}
      {iconName === 15 && <СameraVoiсeIcon/>}
      {iconName === 16 && <DiscussIcon/>}
      {iconName === 17 && <EditIcon/>}
      {iconName === 18 && <TransliteIcon/>}
      {iconName === 19 && <PdfDocumentIcon/>}
    </svg>
    )
  }