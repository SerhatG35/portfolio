import { Button, ButtonProps, IconButton, IconButtonProps } from '@chakra-ui/button'
import { FormControl, FormControlProps } from '@chakra-ui/form-control'
import {
    Center,
    CenterProps,
    Grid,
    GridProps,
    Heading,
    HeadingProps,
    Text,
    TextProps,
} from '@chakra-ui/layout'
import { HTMLMotionProps, motion } from 'framer-motion'

type MergeCenter<P, T> = Omit<P, keyof T> & T
type MotionCenterProps = MergeCenter<CenterProps, HTMLMotionProps<'div'>>
export const MotionCenter: React.FC<MotionCenterProps> = motion(Center)

type MergeHeading<P, T> = Omit<P, keyof T> & T
type MotionHeadingProps = MergeHeading<HeadingProps, HTMLMotionProps<'h2'>>
export const MotionHeading: React.FC<MotionHeadingProps> = motion(Heading)

type MergeIconButton<P, T> = Omit<P, keyof T> & T
type MotionIconButtonProps = MergeIconButton<IconButtonProps, HTMLMotionProps<'button'>>
export const MotionIconButton: React.FC<MotionIconButtonProps> = motion(IconButton)

type MergeText<P, T> = Omit<P, keyof T> & T
type MotionTextProps = MergeText<TextProps, HTMLMotionProps<'p'>>
export const MotionText: React.FC<MotionTextProps> = motion(Text)

type MergeButton<P, T> = Omit<P, keyof T> & T
type MotionButtonProps = MergeButton<ButtonProps, HTMLMotionProps<'button'>>
export const MotionButton: React.FC<MotionButtonProps> = motion(Button)

type MergeGrid<P, T> = Omit<P, keyof T> & T
type MotionGridProps = MergeGrid<GridProps, HTMLMotionProps<'div'>>
export const MotionGrid: React.FC<MotionGridProps> = motion(Grid)

type MergeFormControl<P, T> = Omit<P, keyof T> & T
type MotionFormControlProps = MergeFormControl<FormControlProps, HTMLMotionProps<'div'>>
export const MotionFormControl: React.FC<MotionFormControlProps> = motion(FormControl)
